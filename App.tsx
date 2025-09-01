import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const NowPlaying = () => {
  const track = {
    albumArt: require('./assets/MAPHORISA.png'), 
    title: 'Groove Cartel',
    artist: 'DJ Maphorisa',
    duration: '4:00',
    currentTime: '1:25',
    progressPercent: 35,
  };

  return (
    <View style={styles.container}>
     { /*Album Art */}
      <Image source={track.albumArt} style={styles.albumArt} />

     { /* Track Info */}
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artist}>{track.artist}</Text>

     { /* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={36} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-circle" size={56} color="#ff5f6d" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.time}>{track.currentTime}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${track.progressPercent}%` }]} />
        </View>
        <Text style={styles.time}>{track.duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 360,
    margin: 40,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    shadowColor: '#ff5f6d',
    shadowOpacity: 0.6,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ff5f6d',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  artist: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#444',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff5f6d',
  },
  time: {
    color: '#fff',
    fontSize: 12,
  },
});

export default NowPlaying;
