<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" class="form-control" v-model="title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <label for="subject">Subject</label>
                    <select id="subject" class="form-control">
                        <option v-for="subject in subjects" :key="subject">{{ subject }}</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label for="school_year">School Year</label>
                    <select id="school_year" class="form-control">
                        <option v-for="school_year in school_years" :key="school_year">
                            {{ school_year }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="sku">SKU</label>
                        <input type="text" id="sku" class="form-control" v-model="sku">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default{
  name: 'CreatePublicationForm',
  data() {
    return {
      title: '',
      sku: '',
      subjects: ['Social Studies', 'Science', 'Health'],
      school_years: ['2018-2019', '2019-2020', '2020-2021'],
    };
  },
};
</script>
