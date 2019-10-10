package com.mentor.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(value = "http://localhost:4200")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @RequestMapping("/admin")
    public ArrayList<AdminPojo> getList(){return adminService.getAdminList();}

    @RequestMapping("getAdmin/{email}")
    public AdminPojo getAdmin(@PathVariable String email){return adminService.getAdmin(email);}

    @RequestMapping(method= RequestMethod.POST,value="/admin")
    public void addUsers(@RequestBody AdminPojo s){
        adminService.setAdminDetails(s);
    }

//    @RequestMapping(method = RequestMethod.DELETE, value="/user/delete/{id}")
//    public void deleteUser(@PathVariable Integer id){
//        adminService.deleteUser(id);
//    }

}
