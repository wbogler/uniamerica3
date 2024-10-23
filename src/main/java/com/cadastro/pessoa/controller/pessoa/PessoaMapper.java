package com.cadastro.pessoa.controller.pessoa;

import com.cadastro.pessoa.entity.PessoasEntity;
import com.cadastro.pessoa.entity.RoleEntity;

import java.util.ArrayList;
import java.util.List;

public class PessoaMapper {

    public static PessoaResponse toResponse(PessoasEntity pessoa){
        return new PessoaResponse(
                pessoa.getId(),
                pessoa.getNome(),
                pessoa.getIdade(),
                pessoa.getDocumento(),
                listIds(pessoa.getRoles())

        );
    }

    public static PessoasEntity toEntityFromRequest(PessoaRequest pessoaRequest){
        return new PessoasEntity(
                null,
                pessoaRequest.nome(),
                pessoaRequest.idade(),
                pessoaRequest.doc(),
                pessoaRequest.senha(),
                roleList(pessoaRequest.roles())
        );
    }

    public static List<Long> listIds(List<RoleEntity> roleEntity){
        var ids = new ArrayList<Long>();
        for(RoleEntity x : roleEntity){
            ids.add(x.getId());
        }
        return ids;
    }

    public static List<RoleEntity> roleList(List<Long> ids){
        var listRole = new ArrayList<RoleEntity>();
        for(Long x : ids){
            listRole.add(
                    new RoleEntity(
                            x,null
                    )
            );
        }
        return listRole;
    }
}
