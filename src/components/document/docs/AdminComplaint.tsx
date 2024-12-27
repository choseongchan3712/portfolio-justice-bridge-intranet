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
  background-color: #777;
  color: #fff;
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
  color: var(--sub-color-b);
  white-space: pre-wrap; /* 줄바꿈 허용 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  overflow-x: hidden; /* 가로 스크롤 제거 */
  &:focus {
    border: 1px solid var(--sub-color-b);
  }
`;

const AdminComplaint = (): JSX.Element => {
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
      lawyer_name: `${data.lawyer_name}`,
      lawyer_address: `${data.lawyer_address}`,
      lawyer_number: `${data.lawyer_number}`,
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
                        rowSpan: 6,
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
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "top",
                        columnSpan: 2,
                        children: [
                          new Paragraph({
                            text: `위 소송대리인 변호사 ${data.lawyer_name}`,
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
                            text: `${data.lawyer_address} (${data.lawyer_number})`,
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
                    text: `${data.cattle}의 소`,
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
                    text: "청 구 취 지",
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
                    text: "청 구 원 인",
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
                            text: "1. 소장부본",
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
                            text: "1. 송달료납부서",
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
                text: "위 원고 소송대리인",
                alignment: "center",
              }),
              new Paragraph({
                text: `변호사 ${data.lawyer_name} (서명 또는 날인)`,
                alignment: "center",
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
      <Name>행정소송 소장</Name>
      <Heading>원고</Heading>
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
        <Title>
          <span>변호사(소송대리인):</span>
          <InputText
            type="text"
            {...register("lawyer_name", { required: "이름은 필수입니다." })}
          />
        </Title>
        <Title>
          <span>변호사 주소:</span>
          <InputText
            type="text"
            {...register("lawyer_address", { required: "주소는 필수입니다." })}
          />
        </Title>
        <Title>
          <span>변호사 우편번호:</span>
          <InputText
            type="text"
            {...register("lawyer_number", {
              required: "우편번호는 필수입니다.",
            })}
          />
        </Title>
      </HeadingWrap>

      <Heading>피고</Heading>
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
      <Heading>소의 종류</Heading>
      <SelectWrap>
        <select ref={whatCattle} onChange={changeHandler}>
          <option value="cancellation">취소소송</option>
          <option value="invalidity">무효등확인소송</option>
          <option value="illegality">부작위위법확인소송</option>
          <option value="party">당사자소송</option>
          <option value="populace">민중소송</option>
          <option value="organ">기관소송</option>
        </select>
        <select {...register("cattle")}>
          {cattle === "cancellation" ? (
            <>
              <option>양도소득세 부과처분 취소</option>
              <option>종합소득세 부과처분 취소</option>
              <option>재산세 부과처분 취소</option>
              <option>부가가치세 부과처분 취소</option>
              <option>영업정지 처분 취소</option>
              <option>건축허가 취소 처분 취소</option>
              <option>택시운송사업 면허 취소 처분 취소</option>
              <option>공무원 파면처분 취소</option>
              <option>공무원 해임처분 취소</option>
              <option>군인 강등처분 취소</option>
              <option>대학 입학 취소처분 취소</option>
              <option>교원 징계처분 취소</option>
            </>
          ) : cattle === "invalidity" ? (
            <>
              <option>비권한자에 의한 과세처분 무효 확인</option>
              <option>절차상 하자가 있는 건축허가 무효 확인</option>
              <option>법적 근거 없이 부과된 과태료 무효 확인</option>
              <option>비례 원칙 위반의 처분 무효 확인</option>
            </>
          ) : cattle === "illegality" ? (
            <>
              <option>건축허가 부작위 위법 확인</option>
              <option>승진 심사 부작위 위법 확인</option>
              <option>사회보장급여 신청 부작위 위법 확인</option>
            </>
          ) : cattle === "party" ? (
            <>
              <option>공무원 임용확인</option>
              <option>공무원 연금지급 청구</option>
              <option>공공임대주택 입주권 확인</option>
              <option>보훈대상자 등록 확인</option>
              <option>국가유공자 자격 확인</option>
              <option>참전 명예수당 지급 청구</option>
            </>
          ) : cattle === "populace" ? (
            <>
              <option>선거무효</option>
              <option>당선무효</option>
              <option>주민투표 결과 무효 확인</option>
              <option>주민소환 투표 결과 무효 확인</option>
            </>
          ) : (
            <>
              <option>지방자치단체 경계 확정</option>
              <option>지방세 부과권 다툼</option>
              <option>지방교육자치권 확인</option>
            </>
          )}
        </select>
      </SelectWrap>
      <Heading>
        청구취지
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
        청구원인
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
      <Heading>제출법원</Heading>
      <InputText
        style={{ marginBottom: "20px" }}
        type="text"
        {...register("courthouse", { required: "제출법원은 필수입니다." })}
      />
      <SubmitButton />
    </DetailWrap>
  );
};

export default AdminComplaint;
