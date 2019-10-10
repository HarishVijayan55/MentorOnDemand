package com.mentor.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {
    @Autowired
    private UserRepository ur;

    public void setUserDetails(UserPojo userPojo){
        ur.save(userPojo);
    }
    public ArrayList<UserPojo> getUserList(){
        ArrayList<UserPojo> userList = new ArrayList<UserPojo>();
        ur.findAll().forEach(userList::add);
        return userList;
    }
    public UserPojo getUser(String userName){
        return ur.getUser(userName);
    }

}