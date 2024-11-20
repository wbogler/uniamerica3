package com.cadastro.pessoa.controller.login;

import com.cadastro.pessoa.entity.RoleEntity;
import com.cadastro.pessoa.service.PessoaService;
import com.cadastro.pessoa.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class loginController {

    @Autowired
    private UsuarioService pessoaService;

    @PostMapping("login")
    public ResponseEntity<String> logar(@RequestBody LoginRequest login) {
        try {
            return ResponseEntity.ok(pessoaService.logar(login));
        }catch(AuthenticationException ex) {
            System.out.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("novo-usuario/save")
    public ResponseEntity<HttpStatus> saveNewUser(@RequestParam String usuario,@RequestParam String password,@RequestParam Boolean isAdmin){
        pessoaService.saveNewUser(usuario, password,isAdmin);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
