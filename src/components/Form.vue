<template>
  <h1>controlled form, {{ title }}</h1>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email: </label>
    <input name="email" type="email" v-model="email" />

    <label for="password">Password: </label>
    <input name="password" type="password" v-model="password" />

    <label for="role">Role: </label>
    <select v-model="role">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>

    <label for="skills">Skills: </label>
    <input name="skills" type="text" v-model="skill" @keyup="addSkill" />
    <div class="skills__container">
      <span
        v-for="s in skills"
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
export default {
  name: "Form",
  props: ["title"],
  data() {
    return {
      email: "",
      password: "",
      role: "",
      skill: "",
      skills: [],
    };
  },
  mounted() {

  },
  methods: {
    addSkill(e) {
      const hasCommaOrSpace = e.key === "," || e.key === " ";

      if (hasCommaOrSpace) {
        this.skill = this.skill.slice(0, this.skill.length - 1);
      }

      if ((e.key === "Enter" || hasCommaOrSpace) && this.skill) {
        if (!this.skills.includes(this.skill)) {
          this.skills.push(this.skill);
        }
        this.skill = "";
      }
    },
    removeSkill(e) {
      const { key } = e.target.dataset;

      const idx = this.skills.indexOf(key);
      this.skills.splice(idx, 1);
    },
    handleSubmit() {
      const { email, password, role, skills } = this;
      console.log({
        email,
        password,
        role,
        skills,
      });
    },
  },
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