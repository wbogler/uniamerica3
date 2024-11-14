package com.cadastro.pessoa.service;

import com.cadastro.pessoa.controller.login.LoginRequest;
import com.cadastro.pessoa.entity.UsuarioEntity;
import com.cadastro.pessoa.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private JwtUtils jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;


    public String logar(LoginRequest login) {
        var data = repository.findByUsername(login.login()).get();
        System.out.println(data.getUsername());
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        login.login(),
                        login.senha()
                )
        );
        UsuarioEntity user = repository.findByUsername(login.login()).get();
        String jwtToken = jwtService.generateToken(user);

        return jwtToken;
    }

}
