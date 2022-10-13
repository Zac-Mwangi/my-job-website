class JobSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :company_name, :company_logo, :job_type, :salary, :description, :job_mode , :location

  belongs_to :user
  has_many :reviews
end
