package com.SmartGarden.SmartGarden.repository;


import com.SmartGarden.SmartGarden.model.Nozzle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//采用SpringData JPA的命名方法自动生成函数实现
@Repository
public interface NozzleRepository extends JpaRepository<Nozzle,Integer> {
    List<Nozzle> getByGarden_GardenId(int gardenId);
    Nozzle findByNozzleId(int nozzleId);
}
