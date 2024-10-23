package com.cadastro.pessoa.repository;

import com.cadastro.pessoa.entity.PessoasEntity;
import com.cadastro.pessoa.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
}
