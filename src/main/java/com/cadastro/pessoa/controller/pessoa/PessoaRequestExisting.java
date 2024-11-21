package com.cadastro.pessoa.controller.pessoa;

import java.util.List;

public record PessoaRequestExisting(
        Long id,
        String nome,
        int idade,
        String doc,
        List<Long> roles,
        String senha
) {
}
