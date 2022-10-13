class JobSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :company_name, :company_logo, :job_type, :salary, :description, :type , :location

  belongs_to :user
end
