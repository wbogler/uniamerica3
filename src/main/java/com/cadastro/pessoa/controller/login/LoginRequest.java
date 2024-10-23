package com.cadastro.pessoa.controller.login;

public record LoginRequest(
        String login,
        String senha
) {
}
