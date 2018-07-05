package com.SmartGarden.SmartGarden.controller;


import com.SmartGarden.SmartGarden.model.Sensor;
import com.SmartGarden.SmartGarden.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/sensors")
public class SensorController {

    @Autowired
    private SensorService sensorService;

    @ResponseBody
    @GetMapping("/getAllSensor")
    public List<Sensor> getAllSensor(){
        return sensorService.getAllSensor();
    }

    @ResponseBody
    @GetMapping("/getSensorBySensorId")
    public Sensor getSensorBySensorId(int sensorId)
    {
        return sensorService.getSensorBySensorId(sensorId);
    }

    @ResponseBody
    @PostMapping("/addSensor")
    public boolean addSensor(Sensor sensor){
        return sensorService.addSensor(sensor);
    }

    @ResponseBody
    @PostMapping("/updateSensorBySensorId")
    public boolean updateSensorBySensorId(Sensor sensor){
        return sensorService.updateSensor(sensor);
    }

    @ResponseBody
    @PostMapping("/deleteSensorBySensorId")
    public boolean deleteSensorBySensorId(int sensorId){
        return sensorService.deleteSensor(sensorId);
    }
}
