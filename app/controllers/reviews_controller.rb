class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        reviews = Review.all
        render json: reviews;
    end

    def create
        # create! exceptions will be handled by the rescue_from ActiveRecord::RecordInvalid code
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:user_id, :job_id, :review)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
