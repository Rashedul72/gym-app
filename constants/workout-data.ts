export interface Exercise {
  name: string;
  sets: string;
  intensity: "Heavy" | "Moderate" | "Light" | "Bodyweight";
  image?: string;
}

export interface WorkoutDay {
  id: string;
  label: string;
  day: number;
  description: string;
  image: string;
  exercises: Exercise[];
}

export const workoutDays: WorkoutDay[] = [
  {
    id: "chest-triceps",
    label: "Chest + Triceps",
    day: 1,
    description:
      "Push day focused on building chest mass and sculpting triceps with compound and isolation movements.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    exercises: [
      {
        name: "Bench Press",
        sets: "4×8-10",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Incline Dumbbell Press",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Chest Fly Machine/Dumbbell",
        sets: "3×12",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1562771379-eafdac10ea06?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Dips",
        sets: "3 sets",
        intensity: "Bodyweight",
        image:
          "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Triceps Pushdown",
        sets: "3×12",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1590507621108-433608c97823?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Overhead Triceps Extension",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&q=80",
      },
    ],
  },
  {
    id: "back-biceps",
    label: "Back + Biceps",
    day: 2,
    description:
      "Pull day targeting back thickness and width with heavy rows and curls for bicep peaks.",
    image:
      "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=800&q=80",
    exercises: [
      {
        name: "Lat Pulldown",
        sets: "4×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Barbell Row",
        sets: "3×8",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Seated Cable Row",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Deadlift",
        sets: "3×6",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Barbell Curl",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Hammer Curl",
        sets: "3×12",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=400&fit=crop&q=80",
      },
    ],
  },
  {
    id: "shoulders-abs",
    label: "Shoulders + Abs",
    day: 3,
    description:
      "Build cannonball delts and a solid core with overhead pressing and targeted ab work.",
    image:
      "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80",
    exercises: [
      {
        name: "Shoulder Press Machine/Dumbbell",
        sets: "4×10",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Lateral Raise",
        sets: "3×12",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Front Raise",
        sets: "3×10",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Rear Delt Fly",
        sets: "3×12",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Shrugs",
        sets: "3×12",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Hanging Leg Raise",
        sets: "3×15",
        intensity: "Bodyweight",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Plank",
        sets: "3 sets",
        intensity: "Bodyweight",
        image:
          "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=400&fit=crop&q=80",
      },
    ],
  },
  {
    id: "legs",
    label: "Legs",
    day: 4,
    description:
      "Lower body powerhouse session. Squats, presses, and isolation work for quads, hamstrings, and calves.",
    image:
      "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&q=80",
    exercises: [
      {
        name: "Squat",
        sets: "4×8",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Leg Press",
        sets: "3×10",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Leg Extension",
        sets: "3×12",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Leg Curl",
        sets: "3×12",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1520948013839-62020f374478?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Calf Raise",
        sets: "4×15",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=400&h=400&fit=crop&q=80",
      },
    ],
  },
  {
    id: "chest-back-heavy",
    label: "Chest + Back Heavy",
    day: 5,
    description:
      "Upper body power day pairing heavy chest and back movements for maximum strength gains.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    exercises: [
      {
        name: "Incline Bench Press",
        sets: "4×8",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Pull-up",
        sets: "3 sets",
        intensity: "Bodyweight",
        image:
          "https://images.unsplash.com/photo-1598971639058-a6a0e040e4f1?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Dumbbell Press",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "T-Bar Row",
        sets: "3×8",
        intensity: "Heavy",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Cable Crossover",
        sets: "3×12",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1562771379-eafdac10ea06?w=400&h=400&fit=crop&q=80",
      },
    ],
  },
  {
    id: "arms-abs",
    label: "Arms + Abs",
    day: 6,
    description:
      "Arm pump day with targeted bicep and tricep supersets, finished with core work.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    exercises: [
      {
        name: "Barbell Curl",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Preacher Curl",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Triceps Dips",
        sets: "3 sets",
        intensity: "Bodyweight",
        image:
          "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Skull Crusher",
        sets: "3×10",
        intensity: "Moderate",
        image:
          "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Cable Curl",
        sets: "3×12",
        intensity: "Light",
        image:
          "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=400&fit=crop&q=80",
      },
      {
        name: "Abs: Crunch + Leg Raise",
        sets: "3×15",
        intensity: "Bodyweight",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
      },
    ],
  },
];

export const restDay = {
  day: 7,
  label: "Rest Day",
  description:
    "Your muscles grow during rest. Prioritize sleep, hydration, stretching, and nutrition. Come back stronger tomorrow.",
  tips: ["8+ hours sleep", "Stay hydrated", "Stretch & mobilize"],
};
