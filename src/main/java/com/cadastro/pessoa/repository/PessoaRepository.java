package com.cadastro.pessoa.repository;

import com.cadastro.pessoa.entity.PessoasEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<PessoasEntity, Long> {

    PessoasEntity findPessoaByDocumento(String documento);
}
