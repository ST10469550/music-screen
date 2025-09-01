import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const CITY = "Cape Town";
const DATE_TIME = "Sat, Aug 30 • 14:07";
const CURRENT = { tempC: 18, condition: "Light Rain", description: "Overcast with light drizzle" };
const FORECAST = [
  { day: "Sun", high: 19, low: 14, cond: "Showers" },
  { day: "Mon", high: 18, low: 12, cond: "Cloudy" },
  { day: "Tue", high: 17, low: 11, cond: "Rain" },
  { day: "Wed", high: 20, low: 13, cond: "Partly Cloudy" },
  { day: "Thu", high: 21, low: 14, cond: "Sunny" },
];

export default function App() {
  const [useCelsius, setUseCelsius] = useState(true);
  const temp = useCelsius ? `${CURRENT.tempC}°C` : `${Math.round(CURRENT.tempC * 9/5 + 32)}°F`;

  return (
    <SafeAreaView style={s.safe}>
      {/* Header */}
      <View style={s.header}>
        <Text style={s.city}>{CITY}</Text>
        <Text style={s.date}>{DATE_TIME}</Text>
      </View>

      {/* Current Weather Card */}
      <View style={s.card}>
        <Text style={s.temp}>{temp}</Text>
        <Text style={s.condition}>{CURRENT.condition}</Text>
        <Text style={s.desc}>{CURRENT.description}</Text>
        <Feather name="cloud-rain" size={64} color="#2c3e50" style={{ marginTop: 12 }} />
      </View>

      {/* Unit Toggle */}
      <TouchableOpacity onPress={() => setUseCelsius(!useCelsius)} style={s.toggle}>
        <Text style={s.toggleText}>
          Switch to {useCelsius ? "°F" : "°C"}
        </Text>
      </TouchableOpacity>

      {/* Forecast List */}
      <Text style={s.section}>Next 5 Days</Text>
      <FlatList
        data={FORECAST}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <View style={s.forecastRow}>
            <Text style={s.day}>{item.day}</Text>
            <Feather
              name={
                item.cond.toLowerCase().includes("rain")
                  ? "cloud-rain"
                  : item.cond.toLowerCase().includes("cloud")
                  ? "cloud"
                  : "sun"
              }
              size={20}
              color="#2c3e50"
            />
            <Text style={s.tempRange}>
              {item.high}° / {item.low}°
            </Text>
            <Text style={s.cond}>{item.cond}</Text>
          </View>
        )}
      />

      <Text style={s.footer}>☔ Stay dry and cozy!</Text>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ecf0f1", padding: 20 },
  header: { marginBottom: 20 },
  city: { fontSize: 32, fontWeight: "bold", color: "#2c3e50" },
  date: { fontSize: 14, color: "#7f8c8d", marginTop: 4 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  temp: { fontSize: 60, fontWeight: "900", color: "#2c3e50" },
  condition: { fontSize: 20, marginTop: 6, color: "#34495e" },
  desc: { fontSize: 14, marginTop: 4, color: "#7f8c8d", textAlign: "center" },

  toggle: {
    alignSelf: "center",
    backgroundColor: "#3498db",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 20,
  },
  toggleText: { color: "#fff", fontWeight: "bold" },

  section: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#2c3e50" },

  forecastRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  day: { flex: 1, fontWeight: "600", color: "#2c3e50" },
  tempRange: { flex: 1, textAlign: "center", color: "#2c3e50" },
  cond: { flex: 1, textAlign: "right", color: "#7f8c8d" },

  footer: { textAlign: "center", marginTop: 20, color: "#2c3e50", fontStyle: "italic" },
});


