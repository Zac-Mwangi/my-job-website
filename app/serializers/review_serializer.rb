class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :user_id, :review

  # belongs_to :job
  belongs_to :user

end
