import useUserStore from "@/hooks/use-userstore";
import { Stack } from "expo-router";
import React from "react";

const RootNav = () => {
  const { isGuest, user } = useUserStore();
  console.log("isGuest", isGuest, "user", user);
  return (
    <Stack>
      <Stack.Protected guard={isGuest || user}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isGuest && !user}>
        <Stack.Screen name="(public)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
};

export default RootNav;

// const styles = StyleSheet.create({});
