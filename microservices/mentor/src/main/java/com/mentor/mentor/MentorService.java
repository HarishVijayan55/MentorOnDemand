package com.mentor.mentor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MentorService {
    @Autowired
    private MentorRepository mr;

    public void setMentorDetails(MentorPojo mentorPojo){
        mr.save(mentorPojo);
    }
    public ArrayList<MentorPojo>  getMentorList(){
        ArrayList<MentorPojo> mentorList = new ArrayList<MentorPojo>();
        mr.findAll().forEach(mentorList::add);
        return mentorList;
    }

    public MentorPojo getMentor(String mentorName){
        return mr.getMentor(mentorName);
    }
}
