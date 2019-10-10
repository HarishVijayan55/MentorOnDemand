package com.mentor.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(value = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/user")

    public ArrayList<UserPojo> getList(){
        return userService.getUserList();
    }

    @RequestMapping("getUser/{userName}")
    public UserPojo getUser(@PathVariable String userName) { return userService.getUser(userName);}

    @RequestMapping(method = RequestMethod.POST,value="/user/signup")
    public void addCourse(@RequestBody UserPojo s){ userService.setUserDetails(s); }
}