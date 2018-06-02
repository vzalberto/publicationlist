<template>
    <div>
    <table-component
     :data="publicationList"
     :show-caption="false"
     :filter-placeholder="filterPlaceholder">
      <table-column label="Publication Title">
        <template slot-scope="row">
          <a data-toggle="modal" href="#editModal">{{ row.title }}</a>
        </template>
      </table-column>
      <table-column show="state_grade" label="State & Grade"/>
      <table-column show="sku" label="SKU"/>
      <table-column show="year" label="Year"/>
      <table-column show="status" label="Status"/>

      <table-column label="Actions">
        <template slot-scope="row">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button"
            id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" data-toggle="modal" href="#editModal">Edit</a>
              <a class="dropdown-item" href="#" @click="showSweetAlert">Delete</a>
            </div>
          </div>
        </template>
      </table-column>

    </table-component>

    <div class="modal fade"
     id="editModal" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Publication</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>
<script>
import { TableComponent, TableColumn } from 'vue-table-component';
import swal from 'sweetalert';

export default{
  name: 'PublicationList',
  components: { TableComponent, TableColumn },
  props: ['publications'],
  data() {
    return {
      filterPlaceholder: 'Search',
      publicationList: this.publications,
    };
  },
  methods: {
    showSweetAlert() {
      swal({
        title: 'Are you sure?',
        text: 'Deleted publications are not recoverable',
        dangerMode: true,
        buttons: ['Keep Publication', 'Delete Publication'],
        icon: 'warning',
      });
    },
  },
};
</script>
<style>

</style>
