import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const HoiDap = () => {
    return (
        <div className="space-y-4 pt-4 mx-4">
            <h1 className="font-semibold text-lg">Những câu hỏi thường gặp</h1>
            <div className="accordion">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left">Số liệu "Đã đọc" trong đánh gái truyện là gì?</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-3 text-wrap">
                                <li>
                                    <p>
                                        - Để đánh giá truyện tất nhiên bạn phải đọc truyện đó rồi mới có thể đánh giá được.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - Số liệu "Đã đọc" thể hiện người đánh giá đã đọc bao nhiêu chương trong truyện đó rồi, số "Đã đọc" càng lớn thì đánh giá càng có tính chính xác cao hơn. Nếu chỉ mới đọc vài chương đã đánh giá thì tất nhiên đánh giá đó không đáng tin cho lắm rồi.
                                    </p>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left">Tôi thấy số "Đã đọc" trong đánh giá của tôi không chính xác?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p>Cái này có thể do nhiều nguyên nhân:</p>
                            <ul className="space-y-3 text-wrap">
                                <li>
                                    <p>
                                        - Bạn đọc ở phiên bản cũ thì không được tính ở đây.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - Bạn đọc mà quên không đăng nhập tài khoản
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ...
                                    </p>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left">Thế còn đánh giá cuối chương truyện là gì?</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-3 text-wrap">
                                <li>
                                    <p>
                                        - Đánh giá này chỉ hiện với các truyện dịch, convert.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - Đây là đánh giá của bạn về chất lượng bản dịch, convert của chương đó như thế nào: đã dễ đọc chưa, dễ hiểu chưa ...
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - Đánh giá này sẽ giúp hệ thống phân loại các Dịch Giả, Converter, loại bỏ các bạn làm kém, giữ lại các bạn làm tốt.
                                    </p>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Vì sao tôi bị khóa tài khoản?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Bạn có thể xem lý do bị khóa nick khi đăng nhập vào web/app. Với lý do: vi phạm hoặc bị tố cáo quá nhiều tức là bạn đã bị trên 100 thẻ phạt và hệ thống tự khóa nick với số ngày tương ứng
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-left">Vì sao tôi và người khác chửi lộn mà chỉ mình tôi bị khóa?</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-3 text-wrap">
                                <li>
                                    <p>
                                        - Thứ nhất làm sao bạn biết chỉ mình bạn bị khóa nick? Cách đơn giản nhất để kiểm tra là bạn xem bình luận, đánh giá vi phạm của người kia đối với bạn đã bị xóa chưa, bị xóa rồi tức là người kia cũng đã bị xử lý.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        - Nếu thấy bình luận, đánh giá của người kia chưa bị xử lý thì bạn vui lòng đọc lại câu hỏi: Tôi có làm gì đâu mà bị thẻ phạt? bạn sẽ hiểu là biên tập viên chỉ kiểm tra các bình luận, đánh giá bị báo cáo (gắn cờ) nếu bình luận, đánh giá của người khác vi phạm nhưng không ai báo cáo thì biên tập viên cũng không biết mà xử lý, vì thế nếu thấy vẫn còn bình luận, đánh giá vi phạm thì bạn hãy báo cáo cho biên tập viên để được xử lý
                                    </p>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Tôi còn thắc mắc khác?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Bạn có thể vào Liên hệ quản trị viên (trên web) hoặc Liên hệ, báo lỗi (trên app) để đặt câu hỏi
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default HoiDap;