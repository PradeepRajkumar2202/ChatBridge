package com.ChatBridge.ChatBridge_backend.repositories;

import com.ChatBridge.ChatBridge_backend.entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, String> {

    //get room using Room id
    Room findByRoomId(String roomId);
}
