package br.com.auth.autenticacao.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("hora")
public class HoraController {

    @GetMapping
    public String retornaHora(){
        return "<h1>"+ LocalDateTime.now()+"</h1>";
    }
}
