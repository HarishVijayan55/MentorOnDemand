package com.mentor.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository  extends CrudRepository<UserPojo,String> {
    @Query(value = "select * from user_pojo u where u.user_name = ?1",nativeQuery = true)
    UserPojo getUser(String userName);
}
