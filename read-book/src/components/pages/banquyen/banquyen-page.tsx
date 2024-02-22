const BanQuyen = () => {
    return (
        <div className="space-y-4 pt-4 mx-4">
            <h1 className="font-semibold capitalize">về bản quyền</h1>
            <div className="content space-y-4">
                <ul className="list-decimal ml-12 md:ml-20">
                    <li>
                        <p>
                            TenWebsite.com và các website trong hệ thống luôn ý thức rõ ràng về việc tôn trọng bản quyền của các tác giả, tác phẩm, các sản phẩm trí tuệ.
                        </p>
                    </li>
                    <li>
                        <p>
                            TenWebsite.com là một nền tảng mở, mọi thành viên có quyền đăng truyện do mình sáng tác hoặc dịch từ các ngôn ngữ khác.
                        </p>
                    </li>
                    <li>
                        <p>
                            TenWebsite.com luôn cố gắng đảm bảo rằng tất cả nội dung trong hệ thống đều hợp pháp, nhưng chúng tôi không cam kết chắc chắn rằng có thể kiểm soát mọi thông tin trên ứng dụng.
                        </p>
                    </li>
                    <li>
                        <p>
                            TenWebsite.com sẽ sử dụng mọi biện pháp về công nghệ như gỡ bỏ, cấm IP đối với các tác phẩm có vấn đề với bản quyền hoặc được tác giả gốc yêu cầu.
                        </p>
                    </li>
                    <li>
                        <p>
                            TenWebsite.com không đại diện cho nhóm dịch, người dịch là thành viên trên các website hệ thống TenWebsite.com.
                        </p>
                    </li>
                    <li>
                        <p>
                            TenWebsite.com không có trách nhiệm truy cứu, kiện tụng và phân giải đối với các tác phẩm không do TenWebsite.com sở hữu bản quyền.
                        </p>
                    </li>
                </ul>
                <div className="last-update">
                    <p className="italic text-sm">
                        Tất cả các vấn đề liên quan tới bản quyền, vui lòng liên hệ trực tiếp qua email <span className="font-bold">email@email.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BanQuyen;