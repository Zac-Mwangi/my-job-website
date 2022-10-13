class JobsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        jobs = Job.all
        render json: jobs;
    end

    def create
        # create! exceptions will be handled by the rescue_from ActiveRecord::RecordInvalid code
        job = Job.create!(job_params)
        render json: job, status: :created
    end

    private

    def job_params
        params.permit(:user_id, :company_name, :company_logo, :job_type, :salary, :description, :type)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end