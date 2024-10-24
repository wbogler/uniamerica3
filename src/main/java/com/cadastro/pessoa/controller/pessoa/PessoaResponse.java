package com.cadastro.pessoa.controller.pessoa;

import java.util.List;

public record PessoaResponse(
        Long id,
        String nome,
        int idade,
        String documento,
        List<Long> roles
) {
}
