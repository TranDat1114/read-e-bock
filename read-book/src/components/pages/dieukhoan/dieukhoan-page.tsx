const DieuKhoan = () => {
    return (
        <div className="pt-4 space-y-4 mx-4">
            <h1 className="font-semibold text-base">Điều khoản Dịch vụ</h1>
            <div className="space-y-4">
                <div>
                    <p>
                        Khi tham gia sử dụng dịch vụ, bạn phải đồng ý và tuân thủ các quy định sau.
                    </p>
                </div>
                <div>
                    <p>
                        Quy định này áp dụng cho mọi đối tượng tham gia hoạt động tại website, không kể là khách, thành viên, tác giả, dịch giả, biên tập viên, quản trị viên, admin hay bất cứ thành viên nào khác.
                    </p>
                </div>
                <div className="rules space-y-4">
                    <p className="font-bold">
                        Quy định này gồm 2 bên:
                    </p>
                    <ul className="list-disc ml-12 md:ml-20">
                        <li>
                            <p><span className="font-bold">[Tên website]</span> cung cấp dịch vụ trên internet.</p>
                        </li>
                        <li>
                            <p>Khách hàng gọi tắt là KH, sử dụng dịch vụ của <span className="font-bold">[Tên website]</span> trên internet.</p>
                        </li>
                    </ul>
                </div>
                <div className="content space-y-4">
                    <p className="font-bold">Nội dung:</p>
                    <ul className="list-decimal ml-12 md:ml-20">
                        <li>
                            <p>
                                Không được có những từ ngữ gay gắt, đả kích, xúc phạm, bêu xấu cá nhân và tổ chức trên <span className="font-bold">[Tên website]</span>.
                            </p>
                        </li>
                        <li>
                            <p>
                                Không phát tán và truyền bá thông tin bất hợp pháp, lừa gạt, bôi nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm, đe dọa, lăng mạ, thù hận, kích động… hoặc trái với chuẩn mực đạo đức chung của xã hội.
                            </p>
                        </li>
                        <li>
                            <p>
                                Không được gửi hoặc truyền bất kỳ thông tin hoặc phần mềm nào có chứa bất kỳ loại virus, trojan, bọ hay các thành phần nguy hại nào đến sự an toàn của hệ thống dịch vụ.
                            </p>
                        </li>
                        <li>
                            <p>
                                Không được dẫn link hoặc nhắc đến website khác.
                            </p>
                        </li>
                        <li>
                            <p>
                                Không spam tin nhắn, bình luận, bài viết hay bất cứ hình thức nào tại <span className="font-bold">[Tên website]</span>.
                            </p>
                        </li>
                        <li>
                            <p>
                                Đánh giá và bình luận phải sử dụng tiếng việt có dấu.
                            </p>
                        </li>
                        <li>
                            <p>
                                Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa.
                            </p>
                        </li>
                        <li>
                            <p>
                                Đánh giá khen/chê truyện một cách chung chung không mang lại giá trị cho người đọc sẽ bị xóa.
                            </p>
                        </li>
                        <li>
                            <p>
                                Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa
                            </p>
                        </li>
                        <li>
                            <p>
                                Không để avatar tục tĩu, vi phạm pháp luật hoặc ảnh hưởng đến người khác.
                            </p>
                        </li>
                        <li>
                            <p>
                                Không tận dụng các bugs (lỗi) của chương trình nhằm phá hoại sự ổn định của <span className="font-bold">[Tên website]</span>.
                            </p>
                        </li>
                        <li>
                            <p>
                                Sẽ khóa vĩnh viễn các tài khoản copy truyện thu phí ra ngoài mà không được sự cho phép bằng văn bản của <span className="font-bold">[Tên website]</span>.
                            </p>
                        </li>
                        <li>
                            <p>
                                Quy định về mức phạt đối với thành viên vi phạm nội quy là do ban quản trị website tự đề ra.
                            </p>
                        </li>
                        <li>
                            <p>
                                Thành viên vi phạm sẽ bị khóa nick mà không cần báo trước.
                            </p>
                        </li>
                        <li>
                            <p>
                                Nhân viên quản lý có quyền xóa nội dung gây hại cho website mà không cần báo trước.
                            </p>
                        </li>
                        <li>
                            <p>
                                Nội dung các quy định trên có thể thay đổi mà không cần báo trước.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="last-update">
                    <p className="italic">
                        Cập nhật lần cuối ngày 05/01/2024
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DieuKhoan;