package com.mentor.admin;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends CrudRepository<AdminPojo,String>{
    @Query(value = "select * from admin_pojo a where a.email=?1",nativeQuery = true)
    AdminPojo getAdmin(String email);
}
