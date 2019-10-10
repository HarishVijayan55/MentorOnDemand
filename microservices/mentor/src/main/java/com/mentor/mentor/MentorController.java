package com.mentor.mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(value ="http://localhost:4200")
public class MentorController {
    @Autowired
    private MentorService mentorService;
    @RequestMapping("/mentor")
    public ArrayList<MentorPojo> getList(){
        return mentorService.getMentorList();
    }

    @RequestMapping("/getMentor/{mentorName}")
    public MentorPojo getMentor(@PathVariable String mentorName){
        return mentorService.getMentor(mentorName);
    }

    @RequestMapping(method = RequestMethod.POST,value="/mentor/signup")
    public  void addMentors(@RequestBody MentorPojo s){
        mentorService.setMentorDetails(s);
    }
}
