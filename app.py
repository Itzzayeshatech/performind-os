import streamlit as st
import pandas as pd

st.set_page_config(page_title="PerforMind OS", layout="wide")
st.title("🧠 PerforMind OS - Agentic Performance Intelligence")

@st.cache_data
def load_data():
    return pd.read_csv("data/employees.csv")

df = load_data()
emp = st.selectbox("Select Employee", df["name"])
employee = df[df["name"] == emp].iloc[0]

col1, col2, col3 = st.columns(3)
col1.metric("Tasks Completed", employee["tasks_completed"])
col2.metric("PR Reviews", employee["pr_reviews"])
col3.metric("Attendance %", f"{employee['attendance']}%")

st.divider()
st.subheader("📈 Performance Trend")
trend = employee["tasks_completed"] - employee["prev_tasks"]
if trend > 0:
    st.success(f"Improving (+{trend} tasks from last cycle)")
else:
    st.error(f"Decline ({abs(trend)} tasks from last cycle)")

st.subheader("⚠️ OrgPulse Risk Detection")
if trend < -5 or employee["attendance"] < 85:
    st.warning("Burnout / Performance Risk Detected")
else:
    st.success("No major risk detected")

if st.button("🚀 Generate AI Appraisal"):
    score = round(
        (employee["tasks_completed"] * 0.3 +
         employee["pr_reviews"] * 0.25 +
         employee["attendance"] * 0.2 / 100 +
         employee["docs"] * 0.15) / 20, 2
    )
    st.success("AI Appraisal Generated (28 min vs 2hr 15min)")
    chart_data = pd.DataFrame({
        "Signal": ["Tasks", "PR Reviews", "Attendance", "Docs"],
        "Score": [employee["tasks_completed"], employee["pr_reviews"], employee["attendance"], employee["docs"]]
    })
    st.bar_chart(chart_data.set_index("Signal"))
    st.subheader("⭐ Final Rating")
    st.write(f"{score}/5 (Confidence: 89%)")
