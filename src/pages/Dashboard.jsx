import { useEffect, useState } from "react";
import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  /* ---------------- DATE HELPERS ---------------- */
  const getToday = () => new Date().toISOString().split("T")[0];
  const getYesterday = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split("T")[0];
  };

  /* ---------------- MOODS ---------------- */
  const moods = ["😊", "😌", "😐", "😔", "😤"];
  const moodMeaning = {
    "😊": "You do your best when you feel calm and kind to yourself 🌿",
    "😌": "Peace supports your progress 🧘‍♀️",
    "😐": "Neutral days still matter 🤍",
    "😔": "Even on tough days, you showed up 💙",
    "😤": "Strong emotions still hold strength 🔥",
  };

  /* ---------------- STATE ---------------- */
  const [todayMood, setTodayMood] = useState(
    localStorage.getItem("todayMood") || "😊"
  );

  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || [
      { id: 1, name: "Meditation", completed: false },
      { id: 2, name: "Drink Water", completed: false },
      { id: 3, name: "Morning Walk", completed: false },
    ]
  );

  const [newHabit, setNewHabit] = useState("");
  const [journal, setJournal] = useState(
    localStorage.getItem("journal_" + getToday()) || ""
  );

  const [streak, setStreak] = useState(
    Number(localStorage.getItem("streak")) || 0
  );

  /* ---------------- DAILY RESET ---------------- */
  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisitDate");
    const today = getToday();

    if (lastVisit !== today) {
      setHabits((prev) => prev.map((h) => ({ ...h, completed: false })));
      localStorage.setItem("lastVisitDate", today);
    }
  }, []);

  /* ---------------- SAVE EFFECTS ---------------- */
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("todayMood", todayMood);
  }, [todayMood]);

  useEffect(() => {
    localStorage.setItem("journal_" + getToday(), journal);
  }, [journal]);

  useEffect(() => {
    localStorage.setItem("streak", streak);
  }, [streak]);

  /* ---------------- COUNTS ---------------- */
  const completedCount = habits.filter((h) => h.completed).length;

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-slate-400 text-sm">Welcome back 🌸</p>
        </div>
        <UserButton afterSignOutUrl="/login" />
      </div>

      {/* QUOTE */}
      <div className="bg-indigo-600/30 rounded-xl p-4 text-center mb-6">
        <p className="italic">“{moodMeaning[todayMood]}”</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/60 p-4 rounded-xl">
          <h2 className="font-medium mb-2">Today’s Mood</h2>
          <div className="flex gap-3">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setTodayMood(mood)}
                className={`text-2xl ${
                  todayMood === mood ? "scale-125" : "opacity-60"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl">
          <h2 className="font-medium">Habits Completed</h2>
          <p className="text-3xl mt-2">
            {completedCount}/{habits.length}
          </p>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl">
          <h2 className="font-medium">Streak</h2>
          <p className="text-3xl mt-2">🔥 {streak}</p>
        </div>
      </div>

      {/* JOURNAL */}
      <div className="bg-slate-800/60 p-4 rounded-xl mb-6">
        <h2 className="font-medium mb-2">Daily Reflection</h2>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="Write a few words about your day..."
          className="w-full p-3 bg-slate-900 rounded-lg outline-none"
        />
      </div>

      {/* HABITS */}
      <h2 className="text-xl font-semibold mb-4">Your Habits</h2>

      {/* ADD HABIT */}
      <div className="flex gap-2 mb-4">
        <input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit..."
          className="flex-1 px-4 py-2 rounded bg-slate-800 outline-none"
        />
        <button
          onClick={() => {
            if (!newHabit.trim()) return;
            setHabits((prev) => [
              ...prev,
              { id: Date.now(), name: newHabit, completed: false },
            ]);
            setNewHabit("");
          }}
          className="bg-indigo-600 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* HABIT LIST */}
      <div className="space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={`flex justify-between items-center p-4 rounded-xl transition ${
              habit.completed ? "bg-green-700/40" : "bg-slate-800/60"
            }`}
          >
            <span className={habit.completed ? "line-through" : ""}>
              {habit.name}
            </span>

            <div className="flex gap-4 items-center">
              {/* COMPLETE */}
              {!habit.completed && (
                <button
                  title="Mark as completed"
                  onClick={() => {
                    const today = getToday();
                    const lastStreakDate =
                      localStorage.getItem("lastStreakDate");

                    setHabits((prev) =>
                      prev.map((h) =>
                        h.id === habit.id
                          ? { ...h, completed: true }
                          : h
                      )
                    );

                    if (lastStreakDate === getYesterday()) {
                      setStreak((prev) => prev + 1);
                    } else if (lastStreakDate !== today) {
                      setStreak(1);
                    }

                    localStorage.setItem("lastStreakDate", today);
                  }}
                  className="text-green-400 text-xl"
                >
                  ✅
                </button>
              )}

              {/* DELETE */}
              <button
                title="Delete habit"
                onClick={() =>
                  setHabits((prev) =>
                    prev.filter((h) => h.id !== habit.id)
                  )
                }
                className="text-red-400 text-xl"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}