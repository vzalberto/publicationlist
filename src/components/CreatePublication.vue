<template>
    <div>
        <button data-toggle="modal" href="#createModal">Create Publication</button>
        <div class="modal fade"
            id="createModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create Publication</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <create-publication-form/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                        data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Create Publication</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CreatePublicationForm from '@/components/CreatePublicationForm';

export default {
  name: 'CreatePublication',
  components: { CreatePublicationForm },
  methods: {

  },
};
</script>
