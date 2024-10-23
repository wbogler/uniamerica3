package com.cadastro.pessoa.controller.login;

import com.cadastro.pessoa.entity.RoleEntity;
import com.cadastro.pessoa.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class loginController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping
    public ResponseEntity<List<RoleEntity>> login(@RequestBody LoginRequest loginRequest){
        var login = pessoaService.login(loginRequest.login(), loginRequest.senha());
        if(login==null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }else{
            return ResponseEntity.ok(login);
        }
    }
}
