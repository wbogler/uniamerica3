package com.cadastro.pessoa.controller.pessoa;

import com.cadastro.pessoa.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping("/findone/{id}")
    public ResponseEntity<PessoaResponse> findById(@PathVariable("id") Long idPessoa) throws UserPrincipalNotFoundException {
        return ResponseEntity.ok(
                PessoaMapper.toResponse(pessoaService.findPessoaById(idPessoa))
        );
    }

    @GetMapping
    public ResponseEntity<List<PessoaResponse>> findAllPessoa(){
        return ResponseEntity.ok(
                pessoaService.findAllPessoa().stream().map(PessoaMapper::toResponse)
                        .collect(Collectors.toList())
        );
    }

    @PostMapping("create")
    public ResponseEntity<PessoaResponse> saveNewPessoa(@RequestBody PessoaRequest pessoaRequest){
        return ResponseEntity.ok(
                PessoaMapper.toResponse(
                        pessoaService.createPessoa(
                                PessoaMapper.toEntityFromRequest(pessoaRequest)
                        )
                )
        );
    }

    @DeleteMapping("delete/{idUser}")
    public ResponseEntity<HttpStatus> deletePessoa(@PathVariable (name = "idUser") Long id){
        try{
            pessoaService.deletePessoa(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


}
