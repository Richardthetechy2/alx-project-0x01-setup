import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, address, company }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-sm text-gray-500">@{username}</p>
                </div>

                {/* Contact Info */}
                <div className="mb-4 space-y-2">
                    <div>
                        <span className="font-semibold text-gray-700">📧 Email: </span>
                        <span className="text-gray-600">{email}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">📞 Phone: </span>
                        <span className="text-gray-600">{phone}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">🌐 Website: </span>
                        <a
                            href={`https://${website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {website}
                        </a>
                    </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">🏠 Address</h3>
                    <p className="text-gray-600">
                        {address.suite}, {address.street},<br />
                        {address.city}, {address.zipcode}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                        📍 Geo: Lat {address.geo.lat}, Lng {address.geo.lng}
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">🏢 Company</h3>
                    <p className="text-gray-800 font-medium">{company.name}</p>
                    <p className="italic text-gray-500">"{company.catchPhrase}"</p>
                    <p className="text-xs text-gray-400 mt-1">💼 {company.bs}</p>
                </div>
            </div>

            {/* Footer with ID */}
            <div className="bg-gray-100 px-6 py-2 text-right text-xs text-gray-500">
                User ID: {id}
            </div>
        </div>
    );
};

export default UserCard;