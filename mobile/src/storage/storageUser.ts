import AsyncStorage from "@react-native-async-storage/async-storage"

import { User } from "@dtos/User"
import { USER_STORAGE } from "./storageConfig"

export async function storageUserSave(user: User) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}
