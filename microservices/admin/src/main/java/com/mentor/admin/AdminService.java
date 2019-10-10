package com.mentor.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AdminService {
    @Autowired
    private AdminRepository ar;
    public void setAdminDetails(AdminPojo adminPojo){
        ar.save(adminPojo);
    }

    public ArrayList<AdminPojo> getAdminList(){
        ArrayList<AdminPojo> adminList = new ArrayList<AdminPojo>();
        ar.findAll().forEach(adminList::add);
        return adminList;
    }
    public AdminPojo getAdmin(String email){
        return ar.getAdmin(email);
    }

    public void deleteUser(Integer id){
       // ar.deleteById(id);
    }
}
