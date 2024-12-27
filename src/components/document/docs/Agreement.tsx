import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import DetailWrap from "../DetailWrap";
import Name from "../Name";
import Title from "../Title";
import SubmitButton from "../SubmitButton";

const InputText = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid var(--gray-3);
  margin-bottom: 20px;
  border-radius: 10px;
  color: var(--sub-color-b);
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

const Agreement = () => {
  const [data, setData] = useState<any>(null);

  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = (data: any) => {
    setData({
      consensual1_name: `${data.consensual1_name}`,
      consensual1_id: `${data.consensual1_id}`,
      consensual1_address: `${data.consensual1_address}`,
      consensual1_number: `${data.consensual1_number}`,
      consensual2_name: `${data.consensual2_name}`,
      consensual2_id: `${data.consensual2_id}`,
      consensual2_address: `${data.consensual2_address}`,
      consensual2_number: `${data.consensual2_number}`,
      conclusion_date: `${data.conclusion_date}`,
      conclusion_detail: `${data.conclusion_detail}`,
      courthouse: `${data.courthouse}`,
      attach: `${data.attach}`,
      creation_date: `${data.creation_date}`,
    });
    reset();
  };

  useEffect(() => {
    if (data) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "관 할 합 의 서",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data.consensual1_name} (${data.consensual1_id})`,
              }),
              new Paragraph({
                text: `${data.consensual1_address} (우편번호 ${data.consensual1_number})`,
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data.consensual2_name} (${data.consensual2_id})`,
              }),
              new Paragraph({
                text: `${data.consensual2_address} (우편번호 ${data.consensual2_number})`,
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `  위 당사자 사이에 ${data.conclusion_date}자 체결한 ${data.conclusion_detail}에 관한 소송행위는 ${data.courthouse}을 제1심의 관할법원으로 할 것을 합의합니다.`,
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `첨    부 : ${data.attach}    1통`,
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data.creation_date}`,
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph({
                text: `위 합의자 ${data.consensual1_name} (서명 또는 날인)`,
                alignment: "right",
              }),
              new Paragraph({
                text: `${data.consensual2_name} (서명 또는 날인)`,
                alignment: "right",
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "관할합의서.docx");
      });
    }
  }, [data]);
  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>관할합의서</Name>
      <Title>합의자1 이름</Title>
      <InputText type="text" {...register("consensual1_name")} />
      <Title>합의자1 주민등록번호</Title>
      <InputText type="text" {...register("consensual1_id")} />
      <Title>합의자1 주소</Title>
      <InputText type="text" {...register("consensual1_address")} />
      <Title>합의자1 우편번호</Title>
      <InputText type="text" {...register("consensual1_number")} />
      <Title>합의자2 이름</Title>
      <InputText type="text" {...register("consensual2_name")} />
      <Title>합의자2 주민등록번호</Title>
      <InputText type="text" {...register("consensual2_id")} />
      <Title>합의자2 주소</Title>
      <InputText type="text" {...register("consensual2_address")} />
      <Title>합의자2 우편번호</Title>
      <InputText type="text" {...register("consensual2_number")} />
      <Title>계약 체결 날짜</Title>
      <InputText type="date" {...register("conclusion_date")} />
      <Title>계약 내용</Title>
      <InputText
        type="text"
        {...register("conclusion_detail")}
        placeholder="예) 임대차계약"
      />
      <Title>합의 지정법원</Title>
      <InputText type="text" {...register("courthouse")} />
      <Title>첨부자료 이름</Title>
      <InputText type="text" {...register("attach")} />
      <Title>작성일자</Title>
      <InputText type="text" {...register("creation_date")} />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Agreement;
