class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :user_id, :review
end
