import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DetailWrap from "../DetailWrap";
import Name from "../Name";
import Heading from "../Heading";
import HeadingWrap from "../HeadingWrap";
import Title from "../Title";
import SubmitButton from "../SubmitButton";

const InputText = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

const SelectWrap = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  select {
    all: unset;
    width: 45%;
    padding: 10px;
    border: 1px solid var(--gray-3);
    border-radius: 10px;
    -webkit-appearance: auto;
    -moz-appearance: auto;
    appearance: auto;
    &:focus {
      border: 1px solid var(--sub-color-b);
    }
  }
`;

const PlusButton = styled.div`
  font-style: normal;
  padding: 5px;
  background-color: var(--gray-3);
  color: var(--sub-color-wh);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  font-size: var(--normal-size);
`;

const Textarea = styled.textarea`
  all: unset;
  width: 50%;
  min-height: 100px;
  border: 1px solid var(--gray-3);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  white-space: pre-wrap; /* 줄바꿈 허용 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-x: hidden; /* 가로 스크롤 제거 */
`;

const Claim = () => {
  const [data, setData] = useState<any>();
  const whatCattle = useRef<any>();
  const [cattle, setCattle] = useState<string>("claim");
  const [effectPlus, setEffectPlus] = useState<number[]>([1]);
  const [causePlus, setCausePlus] = useState<number[]>([1]);
  const [proofPlus, setProofPlus] = useState<number[]>([1]);
  const [effectElement, setEffectElement] = useState<any>(null);
  const [causeElement, setCauseElement] = useState<any>(null);
  const [proofElement, setProofElement] = useState<any>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const changeHandler = () => {
    setCattle(`${whatCattle?.current?.value}`);
  };

  const effectHandler = () => {
    const newEffect = effectPlus.length + 1;
    setEffectPlus([...effectPlus, newEffect]);
  };

  const causeHandler = () => {
    const newCause = causePlus.length + 1;
    setCausePlus([...causePlus, newCause]);
  };

  const proofHandler = () => {
    const newProof = proofPlus.length + 1;
    setProofPlus([...proofPlus, newProof]);
  };

  const onSubmit = (data: any) => {
    setData({
      plaintiff_name: `${data.plaintiff_name}`,
      plaintiff_id: `${data.plaintiff_id}`,
      plaintiff_address: `${data.plaintiff_address}`,
      plaintiff_number: `${data.plaintiff_number}`,
      plaintiff_phone: `${data.plaintiff_phone}`,
      plaintiff_fax: `${data.plaintiff_fax}`,
      plaintiff_mail: `${data.plaintiff_mail}`,
      defendant_name: `${data.defendant_name}`,
      defendant_id: `${data.defendant_id}`,
      defendant_address: `${data.defendant_address}`,
      defendant_number: `${data.defendant_number}`,
      defendant_phone: `${data.defendant_phone}`,
      defendant_fax: `${data.defendant_fax}`,
      defendant_mail: `${data.defendant_mail}`,
      cattle: `${data.cattle}`,
      effect: effectPlus.map((value) => `${data["effect" + value]}`),
      //!JavaScript에서는 data["effect" + value] 형태로 객체키를 동적으로 생성함.(=========********==========)
      cause: causePlus.map((value) => `${data["cause" + value]}`),
      proof: proofPlus.map((value) => `${data["proof" + value]}`),
      creation_date: `${data.creation_date}`,
      courthouse: `${data.courthouse}`,
    });

    reset();
  };

  useEffect(() => {
    if (data) {
      setEffectElement(
        data?.effect.map(
          (value: any, index: number) =>
            new Paragraph({
              text: `${index + 1}. ${value || ""}`,
            })
        )
      );
      setCauseElement(
        data?.cause.map(
          (value: any, index: number) =>
            new Paragraph({
              text: `${index + 1}. ${value || ""}`,
            })
        )
      );
      setProofElement(
        data?.proof.map(
          (value: any, index: number) =>
            new Paragraph({
              text: `${index + 1}. ${value || ""}`,
            })
        )
      );
    }
  }, [data]);

  useEffect(() => {
    if (effectElement && causeElement && proofElement) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "소    장",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                borders: {
                  top: { style: "none" },
                  bottom: { style: "none" },
                  left: { style: "none" },
                  right: { style: "none" },
                  insideHorizontal: { style: "none" },
                  insideVertical: { style: "none" },
                },
                rows: [
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        rowSpan: 4,
                        children: [
                          new Paragraph({
                            text: "원    고",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data.plaintiff_name} (${data.plaintiff_id})`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data.plaintiff_address} (우편번호: ${data.plaintiff_number})`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 40,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `전화번호: ${data.plaintiff_phone}`,
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 40,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `팩시밀리번호: ${data.plaintiff_fax}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `전자우편주소: ${data.plaintiff_mail}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                borders: {
                  top: { style: "none" },
                  bottom: { style: "none" },
                  left: { style: "none" },
                  right: { style: "none" },
                  insideHorizontal: { style: "none" },
                  insideVertical: { style: "none" },
                },
                rows: [
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        rowSpan: 4,
                        children: [
                          new Paragraph({
                            text: "피    고",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data.defendant_name}(${data.defendant_id})`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `${data.defendant_address} (우편번호: ${data.defendant_number})`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 40,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `전화번호: ${data.defendant_phone}`,
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 40,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        children: [
                          new Paragraph({
                            text: `팩시밀리번호: ${data.defendant_fax}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `전자우편주소: ${data.defendant_mail}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data.cattle} 심판청구`,
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "심판 청구취지",
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph(""),
              ...effectElement,
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "심판 청구이유",
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph(""),
              ...causeElement,
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "입 증 방 법",
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph(""),
              ...proofElement,
              new Paragraph(""),
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "첨 부 서 류",
                    bold: true,
                    size: 25,
                  }),
                ],
              }),
              new Paragraph(""),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                borders: {
                  top: { style: "none" },
                  bottom: { style: "none" },
                  left: { style: "none" },
                  right: { style: "none" },
                  insideHorizontal: { style: "none" },
                  insideVertical: { style: "none" },
                },
                rows: [
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "1. 위 입증방법",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "각 1통",
                            alignment: "right",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 50,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph("")],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 30,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "2. 심판청구서부본",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [
                          new Paragraph({
                            text: "1통",
                            alignment: "right",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 50,
                          type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph("")],
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data.creation_date}`,
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `위 청구인: ${data.plaintiff_name} (서명 또는 날인)`,
                alignment: "right",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data.courthouse} 귀중`,
                    size: 25,
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "행정소송소장.docx");
      });
    }
  }, [effectElement && causeElement && proofElement]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>행정심판 청구</Name>
      <Heading>청구인</Heading>
      <HeadingWrap>
        <Title>
          <span>이름:</span>
          <InputText
            type="text"
            {...register("plaintiff_name", { required: "이름은 필수입니다." })}
          />
        </Title>
        <Title>
          <span>주민등록번호:</span>
          <InputText
            type="text"
            {...register("plaintiff_id", {
              required: "주민등록번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>주소:</span>
          <InputText
            type="text"
            {...register("plaintiff_address", {
              required: "주소는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>우편번호:</span>
          <InputText
            type="text"
            {...register("plaintiff_number", {
              required: "우편번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>전화번호:</span>
          <InputText
            type="text"
            {...register("plaintiff_phone", {
              required: "전화번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>팩시밀리번호:</span>
          <InputText
            type="text"
            {...register("plaintiff_fax", {
              required: "팩시밀리번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>전자우편주소:</span>
          <InputText
            type="email"
            {...register("plaintiff_mail", {
              required: "전자우편주소는 필수입니다.",
            })}
          />
        </Title>
      </HeadingWrap>

      <Heading>피청구인</Heading>
      <HeadingWrap>
        <Title>
          <span>이름:</span>
          <InputText
            type="text"
            {...register("defendant_name", { required: "이름은 필수입니다." })}
          />
        </Title>
        <Title>
          <span>주민등록번호:</span>
          <InputText
            type="text"
            {...register("defendant_id", {
              required: "주민등록번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>주소:</span>
          <InputText
            type="text"
            {...register("defendant_address", {
              required: "주소는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>우편번호:</span>
          <InputText
            type="text"
            {...register("defendant_number", {
              required: "우편번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>전화번호:</span>
          <InputText
            type="text"
            {...register("defendant_phone", {
              required: "전화번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>팩시밀리번호:</span>
          <InputText
            type="text"
            {...register("defendant_fax", {
              required: "팩시밀리번호는 필수입니다.",
            })}
          />
        </Title>
        <Title>
          <span>전자우편주소:</span>
          <InputText
            type="email"
            {...register("defendant_mail", {
              required: "전자우편주소는 필수입니다.",
            })}
          />
        </Title>
      </HeadingWrap>
      <Heading>청구의 종류</Heading>
      <SelectWrap>
        <select ref={whatCattle} onChange={changeHandler}>
          <option value="cancellation">취소심판</option>
          <option value="invalidity">무효등확인심판</option>
          <option value="duty">의무이행심판</option>
          <option value="exception">특별경우</option>
        </select>
        <select {...register("cattle")}>
          {cattle === "cancellation" ? (
            <>
              <option>영업정지처분 취소</option>
              <option>과태료 부과처분 취소</option>
              <option>허가취소 처분 취소</option>
              <option>운전면허취소처분 취소</option>
              <option>세금 부과 처분 취소</option>
            </>
          ) : cattle === "invalidity" ? (
            <>
              <option>허가 무효 확인</option>
              <option>과태료 부과 무효 확인</option>
              <option>공무원 징계처분 무효 확인</option>
              <option>납세고지 무효 확인</option>
            </>
          ) : cattle === "duty" ? (
            <>
              <option>건축허가 신청 거부에 대한 의무이행</option>
              <option>귀화 신청 부작위에 대한 의무이행</option>
              <option>정보공개청구 거부에 대한 의무이행</option>
              <option>학교설립 인가 신청 거부에 대한 의무이행</option>
              <option>노동조합 설립 신고 수리 거부에 대한 의무이행</option>
            </>
          ) : (
            <>
              <option>경고 처분 취소</option>
              <option>공무원 승진탈락 결정 취소</option>
              <option>수급자 자격 박탈 취소</option>
              <option>입찰자격 제한 처분 취소</option>
              <option>환경영향평가 결과 거부에 대한 의무이행</option>
            </>
          )}
        </select>
      </SelectWrap>
      <Heading>
        심판 청구취지
        <PlusButton onClick={effectHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </Heading>
      {effectPlus.map((data, index) => (
        <>
          <Title key={index}>청구취지 {data}</Title>
          <Textarea
            cols={50}
            rows={5}
            {...register(`effect${data}`)}
          ></Textarea>
        </>
      ))}
      <Heading>
        심판 청구이유
        <PlusButton onClick={causeHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </Heading>
      {causePlus.map((data, index) => (
        <>
          <Title key={index}>청구원인 {data}</Title>
          <Textarea cols={50} rows={5} {...register(`cause${data}`)}></Textarea>
        </>
      ))}
      <Heading>
        입증방법
        <PlusButton onClick={proofHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </Heading>
      {proofPlus.map((data, index) => (
        <>
          <Title key={index}>입증방법 {data}</Title>
          <Textarea cols={50} rows={5} {...register(`proof${data}`)}></Textarea>
        </>
      ))}
      <Heading>작성날짜</Heading>
      <InputText
        type="text"
        {...register("creation_date", { required: "작성날짜는 필수입니다." })}
      />
      <Heading>제출대상</Heading>
      <InputText
        style={{ marginBottom: "20px" }}
        type="text"
        {...register("courthouse", { required: "제출대상은 필수입니다." })}
        placeholder="OO광역시 OO구청장"
      />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Claim;