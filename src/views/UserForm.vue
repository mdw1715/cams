<template>
  <v-card>
    <v-card-title>User Registration</v-card-title>

    <v-card-text>
      <v-form ref="userForm" @submit.prevent="submit">
        <v-container fluid>
          <!-- First and Last Name-->
          <v-row justify="space-between">
            <v-col cols="12" sm="6">
              <v-text-field
                color="purple darken-2"
                :counter="max"
                label="First Name:"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                color="purple darken-2"
                :counter="max"
                label="Last Name:"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- User Position -->
          <v-row>
            <v-col>
              <v-text-field
                color="purple darken-2"
                :counter="max"
                label="Job Title:"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Organization -->
          <v-row>
            <v-col>
              <v-text-field
                color="purple darken-2"
                :counter="max"
                label="Organization:"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Phone Number -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                color="purple darken-2"
                :counter="maxPhone"
                label="Phone Number:"
                required
              ></v-text-field>
            </v-col>

            <!-- Email Address -->
            <v-col>
              <v-text-field
                color="purple darken-2"
                :counter="maxEmail"
                label="Email Address:"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      max: 60,
      maxPhone: 15,
      maxEmail: 100,
    };
  },
};
</script>

<style></style>
