import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Practice Tracker</Text>

      <Text style={styles.solved}>Solved: {solved}</Text>

      {solved >= 5 && (
        <Text style={styles.success}>Great job!</Text>
      )}

      <Button title="Solve +1" onPress={onSolve} />

      <View style={styles.buttonSpace} />

      <Button title="Reset" onPress={onReset} />
    </View>
  );
}

function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

function Stopwatch({
  seconds,
  isRunning,
}: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lab Stopwatch</Text>

      <Text style={styles.timer}>{formattedTime}</Text>

      {isRunning ? (
        <Text style={styles.status}>Running...</Text>
      ) : (
        <Text style={styles.status}>Paused</Text>
      )}
    </View>
  );
}

function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <Button title="Start" onPress={handleStart} />

        <View style={styles.buttonSpace} />

        <Button title="Stop" onPress={handleStop} />
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return <LabScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f7fb',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  solved: {
    fontSize: 18,
    marginBottom: 8,
  },

  success: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  status: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 5,
  },

  controls: {
    marginTop: 4,
  },

  buttonSpace: {
    height: 10,
  },
});