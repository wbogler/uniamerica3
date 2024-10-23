package com.cadastro.pessoa.service;

import com.cadastro.pessoa.entity.PessoasEntity;
import com.cadastro.pessoa.entity.RoleEntity;
import com.cadastro.pessoa.repository.PessoaRepository;
import com.cadastro.pessoa.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private RoleRepository roleRepository;

    public List<RoleEntity> login(String login, String senha){
        var pessoa = pessoaRepository.findPessoaByDocumento(login);
        if(credentialMatch(pessoa,login,senha)) {
            return pessoa.getRoles();
        }else{
            return null;
        }
    }

    public PessoasEntity findPessoaById(Long idPessoa) throws UserPrincipalNotFoundException {
        return pessoaRepository.findById(idPessoa).orElseThrow(
                ()-> new UserPrincipalNotFoundException("user not found")
        );
    }

    public List<PessoasEntity> findAllPessoa(){
        return pessoaRepository.findAll();
    }

    public PessoasEntity createPessoa(PessoasEntity pessoasEntity){
        pessoasEntity.setId(null);
        return pessoaRepository.save(
                pessoasEntity
        );
    }

    public void deletePessoa(Long idPessoa) throws UserPrincipalNotFoundException {
        try{
            pessoaRepository.deleteById(idPessoa);
        }catch (Exception e){
            throw new UserPrincipalNotFoundException("user not found");
        }
    }

    private Boolean credentialMatch(PessoasEntity pessoasEntity, String login, String senha){
        if(pessoasEntity.getDocumento().equalsIgnoreCase(login)
        && pessoasEntity.getSenha().equalsIgnoreCase(senha)){
            return true;
        }else {
            return false;
        }
    }
}
