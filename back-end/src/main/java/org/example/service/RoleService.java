package org.example.service;

public interface RoleService {
    public List<ResponseRole> findAllRoles();
    Page<ResponseRole> getAllRole(Optional<Integer> pageSize, Optional<Integer> pageNo, Optional<String> q);
}
