package br.com.auth.autenticacao.controller;

import br.com.auth.autenticacao.service.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Rotalivre {

    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping("rotalivre")
    public String rotaLivre(){
        return jwtUtils.generateToken();
    }
}
