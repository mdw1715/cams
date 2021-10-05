<template>
  <v-card>
    <v-card-title>Area Information Form</v-card-title>

    <v-card-text>
      <v-form ref="areaForm" @submit.prevent="submit">
        <v-container fluid>
          <!-- Name of Area -->
          <v-row>
            <v-col>
              <v-text-field
                color="purple darken-2"
                :counter="max"
                label="Name of area:"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Population -->
          <v-row>
            <v-col>
              <v-text-field
                color="purple darken-2"
                :counter="maxPopulation"
                label="Population (Optional):"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Extent -->
          <v-row>
            <v-col>
              <v-text-field
                color="purple darken-2"
                :counter="maxExtent"
                label="Extent (Optional):"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- TODO: Hazard to be set to picklist with other (60 char) -->
          <!-- Hazards Applicable Today -->
          <v-row>
            <v-col>
              <v-select
                :items="hazardList"
                :menu-props="{ maxHeight: '400' }"
                label="Hazards Applicable Today:"
                multiple
              ></v-select>
            </v-col>
          </v-row>
          <!-- TODO: Hazard history to be repeat of above -->
          <!-- Hazard History -->
          <v-row>
            <v-col>
              <v-select
                :items="hazardList"
                :menu-props="{ maxHeight: '400' }"
                label="Hazard History (Optional):"
                multiple
              ></v-select>
            </v-col>
          </v-row>
          <!-- TODO: See above -->
          <!-- Hazards Applicable in the Future -->
          <v-row>
            <v-col>
              <v-select
                :items="hazardList"
                :menu-props="{ maxHeight: '400' }"
                label="Hazards Applicable in the Future:"
                multiple
              ></v-select>
            </v-col>
          </v-row>
          <!-- TODO: Picklist of existing entities or link to create new -->
          <!-- Name of other Relevant Entities -->
          <v-row>
            <v-col>
              <v-select
                :items="testList"
                :menu-props="{ maxHeight: '400' }"
                label="Other Relevant Entities"
                multiple
              ></v-select>
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
  name: "AreaForm",
  data() {
    return {
      max: 60,
      maxPopulation: 10,
      maxExtent: 7,
      testList: ["option 1", "option 2", "option 3"],
      hazardList: [
        "Earthquakes and Aftershocks",
        "Volcanos (incl. lahars, pyroclastic flows, volcanic activity)",
        "Landslides (incl. post wildfire landslides) and Avalanches",
        "Hurricanes, Typhoons, or Cyclones",
        "Tropical/Extra Tropical of other extreme storms",
        "Coast Storm Surge",
        "Pluvial and Fluvial Flooding",
        "\"Sunny Day\" Tidal Flooding",
        "Tornadoes, Derechos, Micro-Bursts",
        "Lightning Strikes",
        "Wildfires",
        "Drought",
        "Geologic Sink Holes",
        "Pest Infestations",
        "Famine",
        "High Temperature Event",
        "Low Temperature Event",
        "Cyber Attack or Failure",
        "Other Terrorism",
        "Industrial Accident (Emissions, Releases, Spills, Ect.)"
      ],
    };
  },
};
</script>

<style></style>