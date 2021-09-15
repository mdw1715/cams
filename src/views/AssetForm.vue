<template>
  <v-card>
    <v-card-title>New Asset Form</v-card-title>

    <v-card-text>
      <v-card-form ref="assetForm" @submit.prevent="submit"></v-card-form>
      <v-container fluid>
        <!-- Name of Area -->
        <v-row>
          <v-col>
            <v-text-field
              color="purple darken-2"
              :counter="max"
              label="Area Name:"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Asset Identifier -->
        <v-row>
          <v-col>
            <v-text-field
              color="purple darken-2"
              :counter="assetNumMax"
              label="Asset Identifier Number:"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Space Identifier -->
        <v-row>
          <v-col>
            <v-text-field
              color="purple darken-2"
              label="Spatial Web Identifier:"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- System of which Asset is a Part of -->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="System of which Asset is a Part Of:"
              multiple
              required
            ></v-select>
          </v-col>
        </v-row>

        <!-- Asset Type/Description -->
        <!-- TODO: Other please specifiy option -->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="Asset Type:"
              multiple
              required
            ></v-select>
          </v-col>
        </v-row>

        <!-- Asset Address -->
        <!-- TODO: Create Subform box for address -->
        <v-row>
          <v-col>
            <v-text-field
              color="purple darken-2"
              :counter="max"
              label="Street:"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col>
            <v-text-field color="purple darken-2" label="City:"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field color="purple darken-2" label="State:"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              color="purple darken-2"
              label="Zip Code:"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Asset Lat/Long -->
        <!-- TODO: Format to change depending on type of lat/long -->
        <v-row>
          <v-col>
            <v-text-field
              color="purple darken-2"
              :counter="latLongMax"
              label="Asset Lat/Long:"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Asset Owner -->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="Asset Owner:"
              multiple
            ></v-select>
          </v-col>
        </v-row>

        <!-- Specific Contact -->
        <!-- TODO: Create subform w/ Name Phone Email -->

        <!-- Asset Age -->
        <v-row>
          <v-col>
            <v-text-field
              color="purple darken-2"
              :counter="3"
              label="Asset Age:"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Asset design standards -->
        <v-row>
          <v-col>
            <v-textarea
              :counter="250"
              label="Asset Design Standards:"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Applicable Hazards -->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="Applicable Hazards:"
              multiple
            ></v-select>
          </v-col>
        </v-row>

        <!-- Asset History -->
        <v-row>
          <v-col>
            <v-textarea :counter="250" label="Asset History:"></v-textarea>
          </v-col>
        </v-row>

        <!-- Asset Update History -->
        <!-- TODO: make better formatting for history updates -->
        <v-row>
          <v-col>
            <v-textarea
              :counter="250"
              label="Asset Update History:"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Funding sources -->
        <v-row>
          <v-col>
            <v-textarea
              :counter="250"
              label="Funding sources investigated for maintaining/updating this asset:"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Asset Dependencies-->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="Assets dependent on this asset:"
              multiple
            ></v-select>
          </v-col>
        </v-row>
        <!-- Nature of Dependency -->
        <v-row>
          <v-col>
            <v-textarea
              :counter="250"
              label="Nature of the asset downstream dependency:"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Asset Upstream Dependencies-->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="Assets on which this asset depends upon:"
              multiple
            ></v-select>
          </v-col>
        </v-row>
        <!-- Nature of Dependency -->
        <v-row>
          <v-col>
            <v-textarea
              :counter="250"
              label="Nature of the asset upstream dependency:"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Sources of data for survey -->
        <!-- TODO: TextArea to generate based off of selection -->
        <v-row>
          <v-col>
            <v-select
              :items="testList"
              :menu-props="{ maxHeight: '400' }"
              label="Sources of data for this survey:"
              multiple
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AssetForm",
  data() {
    return {
      max: 60,
      assetNumMax: 30,
      latLongMax: 30,
      testList: ["option 1", "option 2", "option 3"],
    };
  },
};
</script>

<style></style>
