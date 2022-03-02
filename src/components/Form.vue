<template>
  <h1>controlled form, {{ title }}</h1>
  <p v-if="!!loading">Submitting...</p>
  <p v-if="!!status">{{ status }}</p>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email: </label>
    <input name="email" type="email" v-model="form.email" />

    <label for="password">Password: </label>
    <input name="password" type="password" v-model="form.password" />

    <label for="role">Role: </label>
    <select v-model="form.role">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>

    <label for="skills">Skills: </label>
    <input name="skills" type="text" v-model="form.skill" @keyup="addSkill" />
    <div class="skills__container">
      <span
        v-for="s in form.skills"
        :key="s"
        :data-key="s"
        @click="removeSkill"
        class="skills__container__item"
        >{{ s }}</span
      >
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script>
const initialFormState = {
  email: "",
  password: "",
  role: "",
  skill: "",
  skills: []
};

export default {
  name: "Form",
  props: ["title"],
  data() {
    return {
      form: { ...initialFormState },
      loading: false,
      status: ""
    };
  },
  methods: {
    resetForm() {
      this.form = { ...initialFormState };
    },
    addSkill(e) {
      let skill = this.form.skill;
      const { skills } = this.form;
      const hasCommaOrSpace = e.key === "," || e.key === " ";

      if (hasCommaOrSpace) {
        skill = skill.slice(0, skill.length - 1);
      }

      if (hasCommaOrSpace && skill) {
        if (!skills.includes(skill)) {
          skills.push(skill);
        }
        this.form.skill = "";
      }
    },
    removeSkill(e) {
      const { key } = e.target.dataset;

      const idx = this.form.skills.indexOf(key);
      this.form.skills.splice(idx, 1);
    },
    setStatus(type, message) {
      this.status = `${type}: ${message}`;
    },
    handleSubmit() {
      this.loading = true;
      const { email, password, role, skills } = this.form;
      const body = JSON.stringify({
        email,
        password,
        role,
        skills
      });
      fetch("http://localhost:3000/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body
      })
        .then(() => {
          this.resetForm();
          this.setStatus("Success", "Submitted");
        })
        .catch((error) => {
          this.setStatus("Error", error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 10px;
  margin: 10px auto;
}
.skills__container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.skills__container__item {
  background: blue;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.skills__container__item:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
